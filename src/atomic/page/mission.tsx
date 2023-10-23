import * as React from "react";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import _ from "src/i18n/locale"

export default function Mission() {
    return <>
        <NavigationBar />
        <div className="ms-base-page pb-5">
            <section>
                <img src="/img/mission.svg" className="ms-base-image" alt={_("MISSION.HEAD")} height={300} width={391} />
                <h1 className="text-center">{_("MISSION.HEAD")}</h1>
                <h2 className="text-center">{_("MISSION.M")}</h2>
            </section>
            <section>
                <p>{_("MISSION.P1")}</p>
                <ul>
                    <li>{_("MISSION.P1_1")}</li>
                    <li>{_("MISSION.P1_2")}</li>
                    <li>{_("MISSION.P1_3")}</li>
                </ul>
                <p>{_("MISSION.P2")}</p>
            </section>
        </div>
        <Footer />
    </>
}