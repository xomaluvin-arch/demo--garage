// Локальная демонстрационная база данных браузера. Для настоящего проекта
// её можно заменить API + серверной БД без изменения внешнего вида страниц.
const KEY = 'garage47_demo_db_v1';

const initialData = {
  services: [
    { id: 1, icon: '🔧', title: 'Ремонт двигателя', text: 'Диагностика, поиск неисправностей и ремонт двигателя любой сложности.', price: 'от 3 500 ₽', time: 'от 2 часов' },
    { id: 2, icon: '🛞', title: 'Шиномонтаж', text: 'Снятие и установка колёс, балансировка и ремонт проколов.', price: 'от 1 200 ₽', time: 'от 40 минут' },
    { id: 3, icon: '💻', title: 'Компьютерная диагностика', text: 'Проверка электронных систем и считывание кодов ошибок.', price: 'от 1 000 ₽', time: 'от 30 минут' },
    { id: 4, icon: '🛢️', title: 'Замена масла', text: 'Замена моторного масла и фильтров с проверкой технических жидкостей.', price: 'от 900 ₽', time: 'от 30 минут' },
    { id: 5, icon: '⚙️', title: 'Ремонт подвески', text: 'Осмотр ходовой части, замена амортизаторов, рычагов и сайлентблоков.', price: 'от 2 000 ₽', time: 'от 1 часа' },
    { id: 6, icon: '🛑', title: 'Тормозная система', text: 'Замена колодок и дисков, обслуживание суппортов и тормозной жидкости.', price: 'от 1 500 ₽', time: 'от 1 часа' }
  ],
  reviews: [
    { id: 1, name: 'Александр К.', car: 'Volkswagen Passat', rating: 5, date: '12.10.2026', text: 'Хороший пример отзыва: быстро провели диагностику, объяснили проблему и согласовали стоимость до начала работ.' },
    { id: 2, name: 'Мария С.', car: 'Kia Rio', rating: 5, date: '04.10.2026', text: 'Демонстрационный отзыв. Удобная запись, вежливое общение и понятные рекомендации по обслуживанию.' },
    { id: 3, name: 'Дмитрий П.', car: 'Toyota Camry', rating: 4, date: '28.09.2026', text: 'Пример карточки отзыва для макета. Машину осмотрели, показали изношенные детали и предложили варианты ремонта.' },
    { id: 4, name: 'Илья В.', car: 'Skoda Octavia', rating: 5, date: '19.09.2026', text: 'Тестовый текст отзыва. Всё наглядно: сроки, стоимость и список выполненных работ.' }
  ],
  appointments: []
};

export function readDatabase() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    return saved ? { ...initialData, ...saved } : initialData;
  } catch { return initialData; }
}
export function saveAppointment(appointment) {
  const db = readDatabase();
  db.appointments.push({ ...appointment, id: Date.now(), createdAt: new Date().toISOString() });
  localStorage.setItem(KEY, JSON.stringify(db));
  return db.appointments.at(-1);
}
