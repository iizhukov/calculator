import { Display } from "../../display/ui/Display";
import { History } from "../../history/ui/History";
import { Keyboard } from "../../keyboard/ui/Keyboard";

export const Calculator = () => {
    return (
        <div className="bg-card p-6 rounded-lg shadow-lg border-border border raunded">
            {/* <h1 className="p-3 text-3xl">Calculator</h1> */}
            <div className="flex items-center justify-between">
                <div>
                    <Display />
                    <Keyboard />
                </div>
                <div>
                    <History />
                </div>
            </div>
      </div>
    );
};
