import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const mapBlocks = async (blocks) => {
  return blocks
    .filter(({ type }) =>
      ['paragraph', 'heading_1', 'heading_2', 'heading_3', 'image'].includes(
        type
      )
    )
    .map((block) => {
      const { type } = block
      return { type: block.type, content: block[type] }
    })
}

export default notion
