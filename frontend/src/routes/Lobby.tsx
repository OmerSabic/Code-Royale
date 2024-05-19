import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Lobby() {
    const players = [
        { name: "Olivia Martin", level: 3 },
        { name: "Jackson Lee", level: 3 },
        { name: "Isabella Nguyen", level: 2 },
        { name: "William Kim", level: 100 },
        { name: "Sofia Davis", level: 5 },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="underline">Players</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                {players.map((player, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">{player.name}</p>
                        </div>
                        <div className="ml-auto font-medium">lvl {player.level}</div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}


