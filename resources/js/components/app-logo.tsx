import appLogo from '../../../public/logoascee.png'

interface AppLogoProps {
    className?: string;
}

export default function AppLogo({ className }: AppLogoProps) {
    return (
        <>
            <div className="flex items-center w-20 h-auto rounded-full ">
                <img src={appLogo} className={className} alt="ASCEE Logo"/>
            </div>
        </>
    );
}
