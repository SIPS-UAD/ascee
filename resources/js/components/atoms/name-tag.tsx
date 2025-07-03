import { useNameTag } from '@/contexts/NameTagContext';

const NameTag = () => {
    const { name } = useNameTag();

    return (
        <div className="flex w-auto bg-white">
            <div className="mr-3 h-8 w-1 bg-blue-500"></div>
            <h1 className="text-lg font-bold">{name}</h1>
        </div>
    );
};

export default NameTag;
