import SimpleHeader from 'n2o-framework/lib/plugins/Header/SimpleHeader/SimpleHeader'
import Menu from 'n2o-framework/lib/plugins/Menu/MenuContainer'
import styles from "./CustomHeader.module.scss";

export default function CustomHeader(config) {
    console.log("CustomHeader", config)

    let items = config.menu.items
    items  = [1,2,3,4,5]

    return (
        <SimpleHeader style={{ backgroundColor: "red", height: "200px" }} { ...config }>
            {items.map(el => el)}
        </SimpleHeader>
    )
}