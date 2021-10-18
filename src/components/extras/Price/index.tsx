import "./style.css"

export const Price = ({ price, factor }: any) => {
  return (
    <p className="price">
      <span className="price__currency">S/</span>
      {
        parseFloat(factor ? factor * price : price)
          .toFixed(2)
          .toString()
          .split(".", 1)[0]
      }
      <span className="price__decimal">
        {
          parseFloat(factor ? factor * price : price)
            .toFixed(2)
            .toString()
            .split(".", 2)[1]
        }
      </span>
    </p>
  )
}
