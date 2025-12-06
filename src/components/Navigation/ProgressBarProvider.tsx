"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import NavigationEvents from "./NavigationEvents";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
  easing: "ease",
  speed: 200,
});

export default function ProgressBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Override the router.push method to show progress
    const originalPush = router.push;
    const originalReplace = router.replace;
    const originalBack = router.back;
    const originalForward = router.forward;

    router.push = (href: string, options?: any) => {
      NProgress.start();
      return originalPush(href, options);
    };

    router.replace = (href: string, options?: any) => {
      NProgress.start();
      return originalReplace(href, options);
    };

    router.back = () => {
      NProgress.start();
      return originalBack();
    };

    router.forward = () => {
      NProgress.start();
      return originalForward();
    };

    // Handle browser back/forward buttons
    const handlePopState = () => {
      NProgress.start();
    };

    window.addEventListener("popstate", handlePopState);

    // Handle link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if the clicked element or any parent has data-disabled-nprogress
      const disabledElement = target.closest("[data-nprogress-disabled]");
      if (disabledElement) {
        return;
      }

      const anchor = target.closest("a");

      if (anchor && anchor.href && anchor.target !== "_blank") {
        const url = new URL(anchor.href);
        const currentUrl = new URL(window.location.href);

        // Only show progress for internal navigation
        if (
          url.origin === currentUrl.origin &&
          url.pathname !== currentUrl.pathname
        ) {
          NProgress.start();
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      // Restore original methods
      router.push = originalPush;
      router.replace = originalReplace;
      router.back = originalBack;
      router.forward = originalForward;

      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleClick);
    };
  }, [router]);

  return (
    <>
      {children}
      <NavigationEvents />
    </>
  );
}
