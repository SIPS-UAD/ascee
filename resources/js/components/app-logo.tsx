import appLogo from '../../../public/logoascee.png'


export default function AppLogo() {
    return (
        <>
            <div className="flex items-center w-20 h-auto rounded-full ">
                <img src={appLogo} alt="ASCEE Logo"/>
            </div>
        </>
    );
}
