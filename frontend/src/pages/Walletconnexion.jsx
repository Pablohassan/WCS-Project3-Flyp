// import Navbar from "@components/Navbar";
import { Link } from "react-router-dom";
import SignIn from "@components/SignIn";

export default function WalletConnexion({
  onLoginChange,
  login,
  pass,
  onPassChange,
}) {
  return (
    <div>
      <SignIn />
      <h1 className="font-bold text-blue-500"> Flyp</h1>
      <h3>
        Bienvenue sur ton Wallet Flyp, identifie toi afin d'acceder à l'ensemble
        de ta collection
      </h3>

      <header>
        <div>
          Connexion
          <div>
            <input
              className="Login"
              value={login}
              placeholder="Entrez votre login"
              onChange={(event) => onLoginChange(event.target.value)}
            />
          </div>
          <input
            className="Password"
            value={pass}
            placeholder="Entrez votre mot de passe"
            onChange={(event) => onPassChange(event.target.value)}
          />
        </div>
      </header>
      <Link to="/Wallet">
        <button type="button"> Valider</button>
      </Link>
    </div>
  );
}
