'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export function ThemeChanger({}: React.ComponentProps<typeof Button>) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const buttonClass = clsx({
        'cursor-pointer': true,
        'hover:text-primary': theme === 'dark',
        'hover:bg-primary': theme === 'light',
    });

    return (
        <Button variant="outline" size="icon" className={buttonClass} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Moon/> : <Sun/>}
        </Button>
    );
}
