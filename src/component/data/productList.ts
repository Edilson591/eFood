// import Products from "../models/Products";
// import fotoPizzaIlustrativa from "../../assets/foto_pizza_ilustrativa.png";

// export const productsRest: Products[] = [
//   {
//     id: 1,
//     titulo: "Hioki Sushi",
//     capa:
//       "https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mTO47WyumPgC3le6wgKC3WpgCGjzXgk34GiXwaQZwMFs-ahi6Av0fjBIBlfM8MhvNeB5bXsPUuBF6k6OPP74SE0wrGcyNItf4SwG2Mm3ANS4erH6B8ZdrQn09LGGHaEW5d-Nk4KfSLO8kcoiMMeBjcGxtuTceAaEQFHC3XLFHz8G1o9OnD9bC2LqJwYgePpEDeizRaC9LGyu3epWyajZnsLou3aChDIeweKG-ZHBIPjCifsJMuj~uSO3Bbi7TMBOzwrcUoVaZOTklIB~5sXCXbr0SIuak-wA7l7gboHoqU9wLY-S5fiuSCsLDv2EOzqNjQEH2ZYRrtn5yT7OcKJ8sg__",
//     descricao:
//       "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
//     avaliacao: 4.6,
//     tipo: ["Destaque da semana", "Japonesa"],
//     cardapio: [
//       {
//         title: "Pizza Marguerita1",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//         descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita2",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita3",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita4",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita5",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita6",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "La Dolce Vita Trattoria",
//     productImg:
//       "https://s3-alpha-sig.figma.com/img/3a24/4472/c90467aeb9c58ffac7808807e160ee0c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kUFbKRIkwcz-PNo9yQr8UyuPfrZxzctLuiSJxzQ1bC2PfqeltFQr36xIyDpoaNzf3AwJZuqA688msg0dM17suwPokgGkux2OQYBJaWF7Jupi-WDHH8bxOwGfvomd0IpBqbbW1yEq7wSYgsbOzeEXzNXUKtC8QW8cbqs-37vVoooHIahSbjD5~J8AxRU9kd4uB4NJaepvSSyJRDCs8m3pxzBDrAsMEnEP8XYNkvRzN4Y51W-BFxfms07ABIrEpiU6YsvxXiMkE7v3iUSaLT0r~b~2wMSxwmMLn3ugOgf-2iNcHnXaXHfgEKgURnjoadKYvlExZdAEsJSKApbmwXkfUQ__",
//     description:
//       "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
//     links: "La_Dolce_Vita_Trattoria",
//     assessment: 4.9,
//     tags: ["Italiana"],
//     items: [
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "La Dolce Vita Trattoria",
//     productImg:
//       "https://s3-alpha-sig.figma.com/img/3a24/4472/c90467aeb9c58ffac7808807e160ee0c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kUFbKRIkwcz-PNo9yQr8UyuPfrZxzctLuiSJxzQ1bC2PfqeltFQr36xIyDpoaNzf3AwJZuqA688msg0dM17suwPokgGkux2OQYBJaWF7Jupi-WDHH8bxOwGfvomd0IpBqbbW1yEq7wSYgsbOzeEXzNXUKtC8QW8cbqs-37vVoooHIahSbjD5~J8AxRU9kd4uB4NJaepvSSyJRDCs8m3pxzBDrAsMEnEP8XYNkvRzN4Y51W-BFxfms07ABIrEpiU6YsvxXiMkE7v3iUSaLT0r~b~2wMSxwmMLn3ugOgf-2iNcHnXaXHfgEKgURnjoadKYvlExZdAEsJSKApbmwXkfUQ__",
//     description:
//       "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
//     links: "La_Dolce_Vita_Trattoria1",
//     assessment: 4.9,
//     tags: ["Italiana"],
//     items: [
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "La Dolce Vita Trattoria",
//     productImg:
//       "https://s3-alpha-sig.figma.com/img/3a24/4472/c90467aeb9c58ffac7808807e160ee0c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kUFbKRIkwcz-PNo9yQr8UyuPfrZxzctLuiSJxzQ1bC2PfqeltFQr36xIyDpoaNzf3AwJZuqA688msg0dM17suwPokgGkux2OQYBJaWF7Jupi-WDHH8bxOwGfvomd0IpBqbbW1yEq7wSYgsbOzeEXzNXUKtC8QW8cbqs-37vVoooHIahSbjD5~J8AxRU9kd4uB4NJaepvSSyJRDCs8m3pxzBDrAsMEnEP8XYNkvRzN4Y51W-BFxfms07ABIrEpiU6YsvxXiMkE7v3iUSaLT0r~b~2wMSxwmMLn3ugOgf-2iNcHnXaXHfgEKgURnjoadKYvlExZdAEsJSKApbmwXkfUQ__",
//     description:
//       "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
//     links: "La_Dolce_Vita_Trattoria2",
//     assessment: 4.9,
//     tags: ["Italiana"],
//     items: [
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "La Dolce Vita Trattoria",
//     productImg:
//       "https://s3-alpha-sig.figma.com/img/3a24/4472/c90467aeb9c58ffac7808807e160ee0c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kUFbKRIkwcz-PNo9yQr8UyuPfrZxzctLuiSJxzQ1bC2PfqeltFQr36xIyDpoaNzf3AwJZuqA688msg0dM17suwPokgGkux2OQYBJaWF7Jupi-WDHH8bxOwGfvomd0IpBqbbW1yEq7wSYgsbOzeEXzNXUKtC8QW8cbqs-37vVoooHIahSbjD5~J8AxRU9kd4uB4NJaepvSSyJRDCs8m3pxzBDrAsMEnEP8XYNkvRzN4Y51W-BFxfms07ABIrEpiU6YsvxXiMkE7v3iUSaLT0r~b~2wMSxwmMLn3ugOgf-2iNcHnXaXHfgEKgURnjoadKYvlExZdAEsJSKApbmwXkfUQ__",
//     description:
//       "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
//     links: "La_Dolce_Vita_Trattoria3",
//     assessment: 4.9,
//     tags: ["Italiana"],
//     items: [
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: "La Dolce Vita Trattoria",
//     productImg:
//       "https://s3-alpha-sig.figma.com/img/3a24/4472/c90467aeb9c58ffac7808807e160ee0c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kUFbKRIkwcz-PNo9yQr8UyuPfrZxzctLuiSJxzQ1bC2PfqeltFQr36xIyDpoaNzf3AwJZuqA688msg0dM17suwPokgGkux2OQYBJaWF7Jupi-WDHH8bxOwGfvomd0IpBqbbW1yEq7wSYgsbOzeEXzNXUKtC8QW8cbqs-37vVoooHIahSbjD5~J8AxRU9kd4uB4NJaepvSSyJRDCs8m3pxzBDrAsMEnEP8XYNkvRzN4Y51W-BFxfms07ABIrEpiU6YsvxXiMkE7v3iUSaLT0r~b~2wMSxwmMLn3ugOgf-2iNcHnXaXHfgEKgURnjoadKYvlExZdAEsJSKApbmwXkfUQ__",
//     description:
//       "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
//     links: "La_Dolce_Vita_Trattoria4",
//     assessment: 4.9,
//     tags: ["Italiana"],
//     items: [
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//       {
//         title: "Pizza Marguerita",
//         description:
//           "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
//            descriptionModal:
//           "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
//         imageFood: fotoPizzaIlustrativa,
//         price: 60.90
//       },
//     ],
//   },
// ];
