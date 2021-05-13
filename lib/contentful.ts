const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

async function fetchFilteredFAQs(topic: string) {
  console.log("fetchFilteredFAQs Running")
  const filter = "topic" + topic
  const entries = await client.getEntries({
      content_type: 'faq',
      'metadata.tags.sys.id[in]': filter
  })
  if (entries.items) {  
    const FaqsFilteredByService = entries.items.map(item => {
        return item;
    })

    return FaqsFilteredByService;
  }
   console.log(`Error getting Entries for ${contentType.name}.`)
}

async function fetchAllFAQs() {
  console.log("fetchAllFAQs Running")
  const entries = await client.getEntries({
      content_type: 'faq'
  })

  console.log(entries.items.map(item => {
    item.metadata.tags.map(each => {
      const sys = each.sys
      if (sys.id) {
        console.log(sys.id)
      }
    })
  }))

  // entries ? entries :  console.log(`Error getting Entries for ${contentType.name}.`)

}

export {fetchAllFAQs, fetchFilteredFAQs};
