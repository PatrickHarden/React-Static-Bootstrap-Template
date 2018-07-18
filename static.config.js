import axios from 'axios'
import React, { Component } from 'react'



export default {
  getSiteData: async () => {
    const baseURL = 'http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com'
    const { data: menus } = await axios.get(baseURL + '/index.php/wp-json/wp-api-menus/v2/menus/2')
    const { data: options } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/options/')


    return {
      title: 'Attorney Template',
      siteRoot: 'https://attorneytemplate.netlify.com/',
      siteCreator: 'Lawyer Marketing USA',
      siteCreatorURL: 'http://lawyermarketingusa.com',
      menus,
      options
    }
  },
  getRoutes: async () => {
    const baseURL = 'http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com'
    const { data: pages } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=99')
    const { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=6')
    const { data: areas } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/practice-area?per_page=99')
    const { data: staff } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/staff?per_page=99')

    return [
      {
        path: '/blogs',
        component: 'src/pages/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/${post.slug}`,
          component: 'src/singles/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/practice-area',
        component: 'src/archives/AreaArchive',
        getData: () => ({
          areas,
        }),
        children: areas.map(practiceArea => ({
          path: `/${practiceArea.slug}`,
          component: 'src/singles/Areas',
          getData: () => ({
            practiceArea,
          }),
        })),
      },
      {
        path: '/staff',
        component: 'src/archives/StaffArchive',
        getData: () => ({
          staff,
        }),
        children: staff.map(staffMember => ({
          path: `/${staffMember.slug}`,
          component: 'src/singles/Staff',
          getData: () => ({
            staffMember,
          }),
        })),
      },
      {
        path: '/contact',
        component: 'src/pages/Contact',
      },
      {
        path: '/',
        component: 'src/pages/Home',
        children: pages.map(page => ({
        path: `/${page.slug}`,
        component: 'src/pages/Page',
          getData: () => ({
            page,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  }
}