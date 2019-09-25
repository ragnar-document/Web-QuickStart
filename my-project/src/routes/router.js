const Layout = () => import(/* webpackChunkName: "Layout" */ "@/components/_basic-layout.vue");
const Home = () => import(/* webpackChunkName: "Home" */ "@/views/Home.vue");

export default [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
        title: "主页"
      }
    ]
  }
]

