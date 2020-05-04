import TestProject from "./ProjectPageComponents/TestProject";
import BitBusterProject from "./ProjectPageComponents/BitBusterProject";
import PaintProject from "./ProjectPageComponents/PaintProject";
import BurstingBarrelProject from "./ProjectPageComponents/BurstingBarrelProject";
import PinballBashProject from "./ProjectPageComponents/PinballBashProject";
import CookDontLookProject from "./ProjectPageComponents/CookDontLookProject";
import RocketRampageProject from "./ProjectPageComponents/RocketRampageProject";
import P2GOPlayerProject from "./ProjectPageComponents/P2GOPlayerProject";
import DiscordPresencePlugin from "./ProjectPageComponents/DiscordPresencePlugin";

export const projects = [
    {path: "/TestProject", component: TestProject},

    {path: "/Paint", component: PaintProject},
    {path: "/Bit-Buster", component: BitBusterProject},
    {path: "/BurstingBarrel", component: BurstingBarrelProject},
    {path: "/PinballBash", component: PinballBashProject},
    {path: "/CookDontLook", component: CookDontLookProject},
    {path: "/RocketRampage", component: RocketRampageProject},
    {path: "/P2GOPlayer", component: P2GOPlayerProject},
    {path: "/DiscordPresencePlugin", component: DiscordPresencePlugin},
];