import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ({ params }: PageProps) {
  const { slug } = await params;
  return (
    <div className="w-11/12 max-w-xl mx-auto my-4">
      <p className="font-light text-center w-full text-sm text-gray-900 mb-2">
        October 19, 2016, 10:50 AM
      </p>
      <h1 className="text-4xl font-light text-center mb-2">
        6 Technical Skills A Non-Technical Startup Founder Needs to Have
      </h1>
      <h4 className="text-center font-light mb-4 flex flex-col">
        <span>
          By learning a small amount of technical skills, you, as a
          non-technical startup founder, can support your company in smaller
          ways.
        </span>
        <span>Here's our list of need-to-know technical skills.</span>
      </h4>
      <div className="flex w-fit gap-2 items-center justify-between mx-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/image/staff/john-gabriel.webp"
            alt="john-gabriel"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-base text-[var(--color-primary-darker)]">
            John Gabriel
          </p>
          <p className="text-xs text-[var(--color-primary-darker)] font-light">
            UI/UX Designer
          </p>
        </div>
      </div>
      <section className="my-4 font-light flex flex-col gap-4 text-sm leading-6">
        <p className="[&::first-letter]:text-5xl [&::first-letter]:font-normal [&::first-letter]:float-left [&::first-letter]:pr-2">
          When you setup your business, you do so because you have a great idea
          that will be a hit in your market, or there's a problem to fix and you
          have the solution. But as a non-technical startup founder, with no
          development skills, making your dream a reality can be a whole lot
          harder.
        </p>
        <section className="flex flex-col gap-6">
          <article className="flex flex-col gap-2">
            <h3 className="text-2xl">1. Wireframing</h3>
            <p>
              The first vital skill that all non-technical startup founders need
              to have is wireframing. Wireframing is an essential part of{" "}
              <a
                href="#"
                className="text-[var(--color-primary)] border-b-[1px] border-dashed"
              >
                the development process as it gives everybody on the team a
                general idea
              </a>{" "}
              of what the end product is supposed to be like.
            </p>
            <p>
              Typically, wireframes are a really basic sketch or image of what
              the end product might look or feel like. For example, if your team
              is going to make a website, then you{" "}
              <i className="text-gray-600">can draw menus</i> and a picture of
              what the layout will be like (e.g where are the ad banners, how
              many columns are there etc.)
            </p>
            <p>
              Sites like{" "}
              <a
                href="#"
                className="text-[var(--color-primary)] border-b-[1px] border-dashed"
              >
                UXPin
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[var(--color-primary)] border-b-[1px] border-dashed"
              >
                Balsamiq
              </a>{" "}
              can help you put together a wireframe, but a sketch with a pencil
              and paper will also do. All that matters is that you make the
              developers and the designers' lives easier by giving them a
              clearer image of what you're look for.
            </p>
            <figure className="my-2 text-center">
              <div className="relative w-full aspect-[1.344/1]">
                <Image
                  src="/image/blogs/6-skills-for-non-technical-founders-wireframing.jpg"
                  alt="wireframing"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-xs font-light">
                Photo by{" "}
                <a
                  href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  target="_blank"
                  className="underline"
                >
                  Kelly Sikkema
                </a>{" "}
                on{" "}
                <a
                  href="https://unsplash.com/photos/a-person-writing-on-a-piece-of-paper-next-to-a-keyboard-ml1IgjV8OvY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  target="_blank"
                  className="underline"
                >
                  Unsplash
                </a>
              </figcaption>
            </figure>
          </article>
          <article className="flex flex-col gap-2">
            <h3 className="text-2xl">2. User Stories</h3>
            <p>
              In short, a user story is a description of what needs to
              happen/what a user needs to do in order for an outcome to occur.
              Therefore, user stories need to include who is doing the action,
              what are they doing and why they are doing it (e.g what benefit
              are they trying to achieve). One example is as an accountant, I
              want <i className="text-gray-600">to plot my finances</i> on a
              graph so that{" "}
              <i className="text-gray-600">
                I can compare figures more easily.
              </i>
            </p>
            <p>
              The reason that user stories are important to you, as a
              non-technical startup founder, is because it leaves the developer
              with fewer questions. If they know what you want to achieve with
              the end product and how you want to achieve it, it allows them to
              just get on with development. That's why you're encouraged to
              think carefully about{" "}
              <a
                href="#"
                className="text-[var(--color-primary)] border-b-[1px] border-dashed border-[var(--color-primary)]"
              >
                user stories,
              </a>{" "}
              being specific rather than writing out very general ones, quickly.
            </p>
            <blockquote className="mt-4 bg-gray-100 py-5 px-2 text-center flex flex-col gap-1 text-lg">
              "If you can't explain it simply,
              <br />
              you don't understand it well enough."
              <cite className="text-base">- Albert Einstein</cite>
            </blockquote>
          </article>
          <article className="flex flex-col gap-2">
            <h3 className="text-2xl">
              3. Understand How The Development Team Works
            </h3>
            <p>
              As a startup founder, nono-technical or otherwise, it's your job
              to make sure that your team stays on track and makes a fantastic
              end product. But part of that job involves trusting your
              devleopers instead of interfering and getting in their way.
            </p>
            <p>
              In order to avoid distrupting your developers, it's important that
              non-technical startup founder understands and respectes the work
              processes that their developers use.
            </p>
            <p>
              Some teams may use{" "}
              <a
                href="#"
                className="text-[var(--color-primary)] border-b-[1px] border-dashed border-indigio-600"
              >
                agile software development
              </a>{" "}
              and many apprepciate its sprtings, while others may use{" "}
              <a
                href="#"
                className="text-[var(--color-primary)] border-b-[1px] border-[var(--color-primary)] border-dashed"
              >
                Kanban
              </a>
              to prioritise various tasks. The point is that no matter what they
              use, you should try and learn about it so that you can help
              instead of hinder their workflow.
            </p>
          </article>
          <article className="flex flex-col gap-2">
            <h3 className="text-2xl">4. Appropriate Feedback</h3>
            <p>
              Another important skill that non-technical startup founder must
              have is the ability to give proper feedback. If you're in a
              restaurant and you say "my mean didn't taste nice", that feedback
              doesn't help the chef as you aren't explaining why it tasted bad,
              but saying "my meal was too salty" gives the chef something to
              work on.
            </p>
            <p>
              In terms of development, some examples include the sie of images.
              Instead of saying "that photo is too small" say "I want that photo
              to be 10-20% larger" and instead of "I don't like that shade of
              blue", say "I wish that shade of blue was darker". The more
              specific you are, the easier it is for the team to work on a fix.
            </p>
            <figure className="my-2 text-center">
              <div className="relative w-full aspect-[1.344/1]">
                <Image
                  src="/image/blogs/6-skills-for-non-technical-founders-feedback.jpg"
                  alt="rating-stars"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-xs font-light">
                Photo by{" "}
                <a
                  href="https://unsplash.com/@towfiqu999999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  target="_blank"
                  className="underline"
                >
                  Towfiqu barbhuiya
                </a>{" "}
                on{" "}
                <a
                  href="https://unsplash.com/photos/a-row-of-yellow-stars-sitting-on-top-of-a-blue-and-pink-surface-0ZUoBtLw3y4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  target="_blank"
                  className="underline"
                >
                  Unsplash
                </a>
              </figcaption>
            </figure>
          </article>
          <article className="flex flex-col gap-2">
            <h3 className="text-2xl">5. SEO Knowledge</h3>
            <p>
              And finally, a knowledge of SEO (search engine optimization) can
              also benefit you as a non-technical startup founder. SEO affects
              how search engines like Google and Bing list your content, so a
              site with good SEO will rank higher than one with poor SEO.
            </p>
            <p>
              The reason you need to know this is because it has a huge impact
              on your marketing strategy. The better your knowledge of SEO, the
              more people will see your blog posts and the other marketing
              materials that you release.
            </p>
          </article>
        </section>
        <ul className="flex gap-4 justify-center items-center my-10">
          <li className="h-1 w-1 rounded-full bg-gray-900"></li>
          <li className="h-1 w-1 rounded-full bg-gray-900"></li>
          <li className="h-1 w-1 rounded-full bg-gray-900"></li>
          <li className="h-1 w-1 rounded-full bg-gray-900"></li>
        </ul>
      </section>
    </div>
  );
}
