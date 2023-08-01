// import axios from '../src/boot/axios'
// import MockAdapter from 'axios-mock-adapter'
// import { fetchGifs, loadMoreGifs } from '../pages/IndexPage.vue'
// import responseData from './mocks/api.mock'
// import { shallowRef } from 'vue'

// // Mock axios
// const mockAPI = new MockAdapter(axios)
// const offsetMock = shallowRef(0)
// const searchTermMock = shallowRef('')
// const gifsDataMock = shallowRef([])

// describe('API tests', () => {
//   beforeEach(() => {
//     mockAPI.reset()
//   })

//   describe('fetchGifs', () => {
//     it('should fetch gifs data', async () => {
//       // Chamar a função fetchGifs
//       const gifsData = await fetchGifs()
//       offsetMock.value = 0

//       // Verificar se a chamada à API foi feita corretamente
//       expect(mockAPI.get).toHaveBeenCalledWith('gifs/trending')
//       mockAPI.onGet('gifs/trending').reply(200, responseData)

//       // Verificar se o estado gifsData foi atualizado corretamente
//       expect(gifsData).toEqual([])
//       expect(gifsData).toEqual(responseData.data)

//       // Verificar se o estado offset foi atualizado corretamente
//       expect(offsetMock.value).toBe(0)
//     })

//     // Você também pode escrever testes para verificar o tratamento de erros, caso necessário
//   })

//   describe('loadMoreGifs', () => {
//     it('should load more gifs data', async () => {
//       // Definir estado de searchTerm para testar o fluxo de pesquisa
//       searchTermMock.value = 'some search term'

//       // Chamar a função loadMoreGifs
//       await loadMoreGifs()

//       // Verificar se a chamada à API foi feita corretamente
//       expect(mockAPI.get).toHaveBeenCalledWith('gifs/search', {
//         params: {
//           q: 'some search term'
//         }
//       })

//       // Verificar se o estado gifsData foi atualizado corretamente após a pesquisa
//       expect(gifsDataMock.value).toEqual([])

//       // Verificar se o estado offset foi atualizado corretamente após a pesquisa
//       expect(offsetMock.value).toBe(0)

//       // Limpar searchTerm para testar o fluxo de tendências
//       searchTermMock.value = ''

//       // Chamar a função loadMoreGifs novamente
//       await loadMoreGifs()

//       // Verificar se a chamada à API foi feita corretamente para as tendências
//       expect(mockAPI.get).toHaveBeenCalledWith('gifs/trending', {
//         params: {
//           offset: 0
//         }
//       })

//       // Verificar se o estado gifsData foi atualizado corretamente após as tendências
//       expect(gifsDataMock.value).toEqual([])

//       // Verificar se o estado offset foi atualizado corretamente após as tendências
//       expect(offsetMock.value).toBe(0)
//     })

//     // Você também pode escrever testes para verificar o tratamento de erros, caso necessário
//   })
// })
