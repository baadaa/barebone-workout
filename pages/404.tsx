import { useRouter } from 'next/router';
import { isBrowser } from 'utils';

const FourOhFour = (): void => {
  const router = useRouter();
  if (isBrowser) {
    router.push('/');
  }
  return null;
};

export default FourOhFour;
