/* eslint-disable no-console */
import { onMessage } from 'webext-bridge'

console.info('[v-extension] Hello world from content script')

// communication example: send previous tab title from background page
onMessage('tab-prev', ({ data }) => {
  console.log(`[v-extension] Navigate from page "${data.title}"`)
})
