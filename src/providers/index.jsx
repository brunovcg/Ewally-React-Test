import { TokenProvider } from "./token";
import { BalanceProvider } from "./balance";

const providers = ({ children }) => {
  return (
    <TokenProvider>
      <BalanceProvider>{children}</BalanceProvider>
    </TokenProvider>
  );
};

export default providers;
