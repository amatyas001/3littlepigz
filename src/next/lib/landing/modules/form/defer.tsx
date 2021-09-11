import { useEffect, useState } from 'react';

export default function defer<P>(Component: React.ComponentType<P>) {
  const Defer = (props: P) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    return <Component mounted={mounted} {...props} />;
  };

  return Defer;
}
