import classes from "./Main.module.css"
import mainImg from '../../assets/sofa-2.png'

const Main = () => {
  return (
    <div className="section--dark line-light-section"> 
      <div className="container">

        <div className={`${classes.content} content`}>
          <img className={classes.img} src={mainImg} alt="images Sofa" />

          <div className={classes.textBox}>
            <h2 className="h2">Та самая Софа...</h2>

            <div className={classes.body}>
              <p className="text-sm">
                Небольшой отзыв от разработчика сайта на главном экране. Да сайт сделал я. Но речь об этой принцессе с вашего позволения
              </p>

              <p className="text-sm">
                Думаю раз вы здесь, то вы тут не просто так. Это нормально. У всех есть боль, сомнения, страхи ... У меня был чертовски сложный период в жизни. И этот ангел помог мне обрести то что давно искал - покой и уверенность в себе
              </p>

              <p className="text-sm">
                Я слишком упертый и вечно сомневающийся в себе человек... поэтому доходило долго. Где-то пол года. Но когда осознал о чем говорит эта прелесть. То ... жизнь стала налаживаться по щелчку пальцев
              </p>

              <p className="text-sm">
                С любовью и уважением "разработчик" :D
              </p>
            </div>
          </div>
        </div>        

      </div>
    </div>
  )
}

export default Main;