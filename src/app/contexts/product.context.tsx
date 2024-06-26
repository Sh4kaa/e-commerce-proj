'use client'

import useLocalStorage from "@/hooks/useLocalStorage"
import { Product } from "@/types/products.type"
import React, { createContext, useContext } from "react"

type ProductContextTypes = {
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ProductContext = createContext<ProductContextTypes | null>(null)

const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useLocalStorage<Product[]>('carts', [])
  return (
    <ProductContext.Provider value={{ cart, setCart }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsContextProvider


export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (context) {
    return context
  } else {
    console.log('vc precisa englobar na raiz dos componentes')
  }
}
