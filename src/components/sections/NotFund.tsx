import notfund from "../../assets/NotFund.png"
import Button from "../ui/Button"
import { NavLink } from "react-router"

const NotFoundPage = () => {
  return (
    <section className="w-full bg-white mt-6 mb-6">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center space-y-6">

        <img
          src={notfund}
          alt="ilustración no encontrada"
          className="w-71 sm:w-86 drop-shadow-[0_0_25px_rgba(43,43,43,0.25)] animate-float"
        />

        <p className="text-5xl font-extrabold text-[#b88633]">
          404
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-[#2b2b2b] sm:text-7xl">
          Página no encontrada
        </h1>

        <p className="text-lg font-medium text-[#55595c] sm:text-xl/8 max-w-xl">
          Parece que esta sección se desmoronó, pero seguimos construyendo tu camino.
        </p>

        <NavLink to="/">
          <Button
            label="regresar al inicio"
            onClick={() => console.log("Click en botón")}
          />
        </NavLink>

      </div>
    </section>
  )
}

export default NotFoundPage
