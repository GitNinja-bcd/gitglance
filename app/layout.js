import GithubCorner from '@/components/GithubCorner';
import './globals.scss';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <GithubCorner />
                {children}
            </body>
        </html>
    );
}
