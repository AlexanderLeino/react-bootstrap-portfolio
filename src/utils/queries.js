export const GET_BLOG_POSTS = `
query{
    user(username:"Aleino") {
      publication {
        posts(page:0) {
          title
          brief
          slug
          cuid
        }
      }
    }
  }`