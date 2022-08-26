import notion from '~/lib/notion'

const pages = {
  home: 'fbbdd2dbfa404cc7b7d1956c8d38ed5f',
  us: 'cbe1192689924d29bff7743231b3e707',
  projects: '7239b6d9ba554236be5b6e37ad2c27fc',
  contact: '0b29e855ffff4e32b3c661e6167fd7a6',
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
