const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchFAQs(service: string) {
  console.log("Running")
  const entries = await client.getEntries({
      content_type: 'faq'
  })
  if (entries.items) {  
    const FaqsFilteredByService = entries.items.map(item => {
        if ( item.fields['tag'] === service ) {
            return item;
        }
    })

    return FaqsFilteredByService;
  }
   console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchFAQs }

