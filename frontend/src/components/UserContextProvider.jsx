import { createContext, useState, useEffect } from "react";

// fetchMe retourne l'utilisateur trouvé dans
// la session Express (req.session.user)
import { fetchMe } from "@services/api";

// On créé le context qui va contenir l'utilisateur
export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // On va chercher le profil de l'utiliateur courant
  // au chargement du composant
  useEffect(() => {
    const load = async () => {
      setUser(await fetchMe());
      setLoading(false);
    };

    load();
  }, []);

  // Si on a pas fini de charger le profil de l'utilisateur
  // on n'affiche rien
  if (loading) {
    return null;
  }

  // Sinon on renvoie le context provider de l'utilisateur
  // avec comme valeur l'utilisateur plus la fonction de mise
  // à jour de ce dernier
  return (
    // eslint-disable-next-line
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
