import classes from './Price.module.css'

const Price = () => {
  const paragraphs = [
    {
      title: '🔮 Диагностика',
      price: 'от 1500 ₽',
      body: 'Посмотрю, что сидит в твоих каналах. Кто пришёл, кто ушёл, кто задержался без спроса.',
    },
    {
      title: '📜 Расклад',
      price: 'от 1500 ₽',
      body: 'Карты скажут правду. Даже ту, которую ты боишься услышать. Без розовых фильтров.',
    },
    {
      title: '🧹 Чистка',
      price: 'от 3000 ₽',
      body: 'Счищаю чужое, липкое, мёртвое. Возвращаю твою территорию тебе.',
    },
    {
      title: '🛡 Защита',
      price: 'от 3000 ₽',
      body: 'Ставлю зеркала, печати, молчаливых стражей. Чтоб никто не лез, пока ты спишь.',
    },
    {
      title: '🌍 Парапсихология (индивидуально)',
      price: 'от 5500 ₽',
      body: 'Работа с тем, что не влезло в стандартные практики. По запросу.',
    },
    {
      title: '✨ Индивидуальные практики',
      price: 'обсуждаемо',
      body: 'Всё, что не вошло в список. Ритуалы под ключ.',
    },
    {
      title: '📖 Курсы',
      price: 'от 4500 ₽',
      body: '',
    },
  ];

  return (
    <div className='section--dark line-light-section'>
      <div className="container">
        <div className="content">
          <h2 className='h2 line-dark-text'>Прайс</h2>

          <ul className={classes.list}>
            {paragraphs.map((item, index) => (
              <li className={`${classes.item} line-dark-section`} key={index}>
                <p className="h3">{item.title}</p>
                {item.body && <p className="text-base">{item.body}</p>}
                <p className={`${classes.price} text-base bold`}>{item.price}</p>
              </li>
            ))}
          </ul>

          <p className="text-base">
            <span className='bold'>Важно</span>: все суммы — ориентир. Цена обсуждается лично, после диагностики или короткого созвона.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Price;
