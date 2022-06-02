import { Link } from "react-router-dom";

export default function WalletConnexion() {
  return (
    <div>
      <h1 className="font-bold text-blue-500"> Flyp</h1>
      <h3>
        Bienvenu sur ton Wallet Flyp, identifie toi afin d'acceder à l'ensemble
        de ta collection
      </h3>

      <header>
        <div>
          Connexion
          <div>
            <input
              className="Login"
              // value={login}
              placeholder="Entrez votre login"
              // onChange={(event) => onLoginChange(event.target.value)}
            />
          </div>
          <input
            className="Password"
            // value={pass}
            placeholder="Entrez votre mot de passe"
            // onChange={(event) => onPassChange(event.target.value)}
          />
        </div>
      </header>
      <Link to="/Wallet">
        <button type="button"> Valider</button>
      </Link>
    </div>
  );
}
