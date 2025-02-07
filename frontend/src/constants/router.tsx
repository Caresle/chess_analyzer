import { createBrowserRouter, RouteObject } from "react-router-dom"
import HomePage from "../app/home"

export type RouteObjectWithMeta = RouteObject & {
	meta?: {
		showInNavbar: boolean
		name?: string
		// icon?: IconType
	}
}

const routesApp: RouteObjectWithMeta[] = [
	{
		path: "/",
		element: <HomePage />,
		meta: {
			showInNavbar: true,
			name: "Home",
			// icon: Icons.Navbar.Dashboard,
		},
	},
	{
		path: "/login",
		element: <div>Login Page</div>,
		meta: {
			showInNavbar: false,
		},
	},
]

export const routesNavbar: RouteObjectWithMeta[] = routesApp.filter(
	route => route.meta?.showInNavbar
)

export const router = createBrowserRouter(routesApp)
