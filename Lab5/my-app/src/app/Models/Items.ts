export interface Product {
  id: number;
  img: string;
  rating: number;
  kaspi: string;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    img: "/assets/1.jpg",
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/odejalo-mirman-ode150x210-150x205-sm-teploe-103207956/?c=750000000#!/item",
    name: 'Одеяло МирМан ode150x210 150x205 см теплое',
    price: 10,
    description: `размер: 150x205
    наполнитель: искусственный лебяжий пух
    материал чехла: сатин, ,бамбук
    сезонность: теплое`
  },
  {
    id: 2,
    img: "/assets/2.jpg",
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/volshebnaja-noch-podushka-bambuk-50x70-sm-bambukovoe-volokno-iskusstvennoe-volokno-22900217/?c=750000000#!/item",
    name: 'Волшебная ночь подушка Бамбук 50x70 см, бамбуковое волокно, искусственное волокно',
    price: 5,
    description: `тип: подушка
    материал чехла: хлопок
    наполнитель: бамбуковое волокно, ,искусственное волокно
    анатомическая: Нет`
  },
  {
    id: 3,
    img: "/assets/3.jpg",
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/hansa-fs1004-3w-100-l-belyi-103863751/?c=750000000#!/item",
    name: 'Морозильник Hansa FS1004.3W 100 л белый',
    price: 50,
    description: `тип: морозильник-ларь
    размораживание морозильной камеры: ручное
    мощность замораживания: 45 кг/сут
    класс энергопотребления: A+
    цвет: белый`
  },
  {
    id: 4,
    img: "/assets/4.jpg",
    rating: 5,
    kaspi: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/hba/52389260558366/handel-k8-2in1-105756607-1.jpg",
    name: 'Микрофон Handel K8 2in1',
    price: 0,
    description: `тип: конденсаторный
    конструкция: петличный (клипса)
    назначение: универсальный
    тип подключения: беспроводной
    радиосистема: Нет
    разъемы: USB Type-C, ,Lightning
    цвет: черный`
  },
  {
    id: 5,
    img: "/assets/5.jpg",
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/dexp-dexp-em32-c02-chernyi-108657090/?c=750000000#!/item",
    name: 'Крепление для монитора DEXP DEXP EM32-C02 черный',
    price: 0,
    description: `стандарт VESA: 100x100
    минимальная диагональ экрана: 17 дюйм
    максимальная диагональ экрана: 32 дюйм`
  },
  {
    id: 6,
    img: "/assets/6.jpg",
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/table-tree-90x90x76-belyi-107346485/?c=750000000#!/item",
    name: 'Обеденный стол Table tree, 90x90x76, белый',
    price: 0,
    description: `тип: классический
    форма: круглый
    материал: ЛДСП
    длина, см: 90
    ширина, см: 90
    высота, см: 76
    цвет: белый
    страна: Казахстан`
  },
  {
    id: 7,
    img: "/assets/7.jpg",
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000#!/item",
    name: 'Чехол Ala case для iPhone 11 прозрачный',
    price: 0,
    description: `тип: спортивный
    совместимый бренд: Apple
    материал: резина, ,силикон`
  },
  {
    id: 8,
    img: "/assets/8.jpg",
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/g-case-dlja-apple-iphone-7-prozrachnyi-104325672/?c=750000000#!/item",
    name: 'Чехол G-Case для Apple IPhone 7 прозрачный',
    price: 0,
    description: `тип: накладка
    совместимый бренд: Apple
    материал: силикон`
  },
  {
    id: 9,
    img: "/assets/9.jpg",
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/oem-dlja-iphone-12-pro-max-prozrachnyi-105740107/?c=750000000#!/item",
    name: 'Чехол OEM для iPhone 12 Pro Max прозрачный',
    price: 0,
    description: `тип: накладка противоударная
    совместимый бренд: Apple
    материал: силикон`
  },
  {
    id: 10,
    img: "/assets/10.jpg",
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/matras-v-dom-i-sad-002-80x200x10-sm-chehol-tik-106577484/?c=750000000#!/item",
    name: 'Матрас В Дом и Сад 002, 80x200x10 см, чехол тик',
    price: 0,
    description: `тип: матрас
    жесткость стороны 1: средняя
    пружинный блок: беспружинный
    наполнитель: вата
    материал чехла: тик
    ортопедический: Нет
    цвет: белый, ,красный
    страна: Казахстан`
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
