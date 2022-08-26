import notion from '~/lib/notion'

const pages = {
  home: 'fbbdd2dbfa404cc7b7d1956c8d38ed5f',
  us: 'fbbdd2dbfa404cc7b7d1956c8d38ed5f',
  projects: 'fbbdd2dbfa404cc7b7d1956c8d38ed5f',
  contact: 'fbbdd2dbfa404cc7b7d1956c8d38ed5f',
}

const mapBlocks = async (blocks) => {
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

export default async function handler(req, res) {
  const pageId = pages[req.query.page]
  try {
    const pageData = await notion.blocks.children.list({
      block_id: pageId,
    })
    const content = await mapBlocks(pageData?.results)
    res.status(200).json(content)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}
