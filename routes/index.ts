import { Router } from 'express'

export type Route = {
  url: string,
  route: Router
}

export interface Routes {
  [key: string]: Route
}

const ROUTES: Routes = {

}



export default ROUTES