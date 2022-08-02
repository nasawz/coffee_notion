

import cloud from '@/cloud-sdk'
import { Client } from '@notionhq/client';



exports.main = async function (ctx: FunctionContext) {
  // body, query 为请求参数, auth 是授权对象
  const { auth, body, query } = ctx


  // Initializing a client
  const notion = new Client({
    auth: '',
  })

  const databaseId = '';

  async function addItem(text) {
    try {
      const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          title: {
            title: [
              {
                "text": {
                  "content": text
                }
              }
            ]
          }
        },
      })
      console.log(response)
      console.log("Success! Entry added.")
    } catch (error) {
      console.error(error.body)
    }
  }
  addItem("Yurts in Big Sur, California")


  // 数据库操作
  //const db = cloud.database()
  //const r = await db.collection('admins').get()
  //console.log(r)

  return ''
}
