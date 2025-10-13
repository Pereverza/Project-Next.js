'use client';

import { useEffect, useState } from 'react';
import Button from '@/app/components/button';
    
export default function MagicButton(
  props: React.ComponentProps<typeof Button>
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 2) return; {
      throw new Error('Unexpected error');
    }
  }, [count]);

  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      MagicButton
    </Button>
  );
}
