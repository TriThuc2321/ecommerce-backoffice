'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

import { Button } from '@heroui/button';

import { LogoIcon } from '@/assets/icons';
import ENV from '@/configs/env';

export default function LoginPage() {
  const router = useRouter();
  const handleGoogleLogin = () => {
    router.push(`${ENV.API_URL}/api/auth/google`);
  };

  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <div className="mb-8">
        <LogoIcon className="h-8" />
      </div>

      <div className="mb-12 text-center">
        <h1 className="text-foreground mb-2 text-3xl font-bold">
          Welcome back
        </h1>
        <p className="text-default-700 max-w-md text-lg">
          Streamline your English classes with our comprehensive management
          platform
        </p>
      </div>

      <Button
        variant="solid"
        color="primary"
        onClick={handleGoogleLogin}
        className="w-full border py-3"
        startContent={<FaGoogle className="h-5 w-5 text-white" />}
        size="lg"
      >
        Continue with Google
      </Button>

      <p className="text-default-600 mt-4 text-center text-sm">
        Sign in to access My English management dashboard and tools
      </p>
    </div>
  );
}
