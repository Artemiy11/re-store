export default class BookStoreService {

    getBooks() {
        return [
            {
                author: 'Artemy Klimashko',
                title: 'JavaScript - clean code',
                id: 1,
                price: 32,
                coverImage: 'https://cv9.litres.ru/pub/c/pdf-kniga/cover_max1500/24499998-devid-flenagan-javascript-podrobnoe-rukovodstvo-6-e-izdanie-24499998.jpg'
            },
            {
                author: 'Eugeny Klimashko',
                title: 'Python - telegram bots',
                id: 2,
                price: 45,
                coverImage: 'https://library-it.com/wp-content/uploads/2019/11/mark_lutts_-_programmirovanie_na_python_4-e_izd_1-724x1024.jpg'
            }
        ];
    }
    
}