import Vue from 'vue'
import VueRouter from 'vue-router'

const UserHome = () => import('../views/user_home/UserHome')
const CompanyHome = () => import('../views/company_home/CompanyHome')
const Login = () => import('../views/login/Login')
const PersonalCenter = () => import('../views/personal_center/PersonalCenter')
const JobPage = () => import('../views/job_page/JobPage')
const CompanyLogin = () => import('../views/login/CompanyLogin')
const CompanyRegister = () => import('../views/register/CompanyRegister')
const UserLogin = () => import('../views/login/UserLogin')
const UserRegister = () => import('../views/register/UserRegister')
const AdminLogin = () => import('../views/login/AdminLogin')
const AdminHome = () => import('../views/admin_home/AdminHome')
const UserAction = () => import('../views/admin_home/UserAction')
const CompanyAction = () => import('../views/admin_home/CompanyAction')
const JobAction = () => import('../views/admin_home/JobAction')
const JobDetail = () => import('../views/detail/JobDetail')
const CompanyDetail = () => import('../views/detail/CompanyDetail')
const UChangePwd = () => import('../views/register/UChangePwd')
const CChangePwd = () => import('../views/register/CChangePwd')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user_home'
  },
  {
    path: '/user_home',
    component: UserHome
  },
  {
    path: '/company_home',
    component: CompanyHome
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/personal_center',
    component: PersonalCenter
  },
  {
    path: '/job_page',
    component: JobPage
  },
  {
    path: '/company_login',
    component: CompanyLogin
  },
  {
    path: '/company_register',
    component: CompanyRegister
  },
  {
    path: '/user_login',
    component: UserLogin
  },
  {
    path: '/user_register',
    component: UserRegister
  },
  {
    path: '/admin_login',
    component: AdminLogin
  },
  {
    path: '/admin_home',
    component: AdminHome
  },
  {
    path: '/user_action',
    component: UserAction
  },
  {
    path: '/company_action',
    component: CompanyAction
  },
  {
    path: '/job_action',
    component: JobAction
  },
  {
    path: '/job_detail',
    name: JobDetail,
    component: JobDetail
  },
  {
    path: '/company_detail',
    name: CompanyDetail,
    component: CompanyDetail
  },
  {
    path: '/user_change_password',
    name: UChangePwd,
    component: UChangePwd
  },
  {
    path: '/company_change_password',
    name: CChangePwd,
    component: CChangePwd
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
