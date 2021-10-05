import { TokenProvider } from "./token";

const providers = ({ children }) => {
  return (
    
      <TokenProvider>{children}</TokenProvider>
  
  );
};

export default providers;
