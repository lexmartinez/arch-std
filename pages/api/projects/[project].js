import notion, { mapBlocks } from '~/utils/notion'

export default async function handler(req, res) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DATABASE,
    filter: {
      and: [
        {
          property: 'published',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'slug',
          rich_text: {
            equals: req.query.project,
          },
        },
      ],
    },
  })
  const projectId = response?.results[0]?.id
  try {
    const pageData = await notion.blocks.children.list({
      block_id: projectId,
    })
    const data = await mapBlocks(pageData?.results)
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}
