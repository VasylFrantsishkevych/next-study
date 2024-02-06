import { NextPage } from "next"

export type TypeRoles = {
   isOnlyUser?: boolean,
}
// розширяємо тим NextPage
export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles
// тип для components
export type TypeComponentAuthFields = { Component: TypeRoles}
