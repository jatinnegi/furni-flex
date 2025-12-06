import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props {
  current: ProductProps;
  selectedImgId: number;
}

interface UpdateSelectedImageProps {
  productImageId: number;
}

const initialState: Props = {
  current: {
    id: 1,
    name: "Helm Sofa",
    price: 4299,
    images: [
      { id: 1, href: "/image/products/helm-sofa/img-1.jpg" },
      { id: 2, href: "/image/products/helm-sofa/img-2.jpg" },
      { id: 3, href: "/image/products/helm-sofa/img-3.jpg" },
      { id: 4, href: "/image/products/helm-sofa/img-4.jpg" },
      { id: 5, href: "/image/products/helm-sofa/img-5.jpg" },
      { id: 6, href: "/image/products/helm-sofa/img-6.jpg" },
      { id: 7, href: "/image/products/helm-sofa/img-7.jpg" },
      { id: 8, href: "/image/products/helm-sofa/img-8.jpg" },
      { id: 9, href: "/image/products/helm-sofa/img-9.jpg" },
      { id: 10, href: "/image/products/helm-sofa/img-10.jpg" },
      { id: 11, href: "/image/products/helm-sofa/img-11.jpg" },
      { id: 12, href: "/image/products/helm-sofa/img-12.jpg" },
    ],
  },
  selectedImgId: 1,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductProps>) => {
      state.current = action.payload;
    },
    setPrevImage: (state) => {
      const currentImgId = state.selectedImgId;
      const idx: number = state.current.images.findIndex(
        (image: ProductImageProps) => image.id === currentImgId
      );

      // Either not found or already set to first image
      if (idx === -1 || idx === 0) {
        return;
      }

      state.selectedImgId = state.current.images[idx - 1].id;
    },

    setNextImage: (state) => {
      const currentImgId = state.selectedImgId;
      const idx: number = state.current.images.findIndex(
        (image: ProductImageProps) => image.id === currentImgId
      );

      // Either not found or already set to last image
      if (idx === -1 || idx === state.current.images.length - 1) {
        return;
      }

      state.selectedImgId = state.current.images[idx + 1].id;
    },

    setSelectedImg: (
      state,
      action: PayloadAction<UpdateSelectedImageProps>
    ) => {
      state.selectedImgId = action.payload.productImageId;
    },
  },
});

export const { setProduct, setPrevImage, setNextImage, setSelectedImg } =
  productSlice.actions;
export default productSlice.reducer;
