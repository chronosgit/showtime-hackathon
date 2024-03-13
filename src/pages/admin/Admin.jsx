import AdminSidebar from "./admin-sidebar/AdminSidebar";
import AdminHeader from "./admin-header/AdminHeader";
import styles from "./admin.module.css";

const Admin = () => {

    return (
        <div className={styles.admin}>
            <AdminSidebar />

            <main className={styles.main}>
                <AdminHeader />
            </main>
        </div>
    );
};

export default Admin;