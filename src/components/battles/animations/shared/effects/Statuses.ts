import { IMoveAction, IMoveEffect, ITeamAndAction } from "battlemovr";
import { GeneralComponent } from "gamestartr";

import { FullScreenPokemon } from "../../../../../FullScreenPokemon";

/**
 * Runs status effect animations for FullScreenPokemon instances.
 */
export class Statuses<TGameStartr extends FullScreenPokemon> extends GeneralComponent<TGameStartr> {
    /**
     * Runs the status effect animation for a battle move effect.
     *
     * @param teamAndAction   Team and move being performed.
     * @param effect   Effect of the move that missed.
     * @param onComplete   Handler for when this is done.
     */
    public run(teamAndAction: ITeamAndAction<IMoveAction>, effect: IMoveEffect, onComplete: () => void): void {
        console.log("Status!", teamAndAction, effect);
        onComplete();
    }
}
