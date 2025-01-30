"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getProducts = (API:string, id?:string) => {
    const params = { page: 1, limit: 1000 , categoryId:id ? id : null}

    const { data:products = [], isLoading } = useQuery({
        queryKey: ['product_item'],
        queryFn: () => instance().get(API, { params }).then(res => res.data?.productItems)
    })
    return {products, isLoading}
}