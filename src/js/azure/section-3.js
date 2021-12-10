export const storage = { 
    template: `
        <div class="slide paper"> 
            <h2 class="mb-3">Azure - Storage Types.</h2>
            <p>Azure offers different types of storing. The user must choose according to the need of his application.
            Below, we'll discuss the most used ones at the moment.</p>
            <ul>
                <li>
                    <h6><strong>Blob Storage:</strong></h6>
                    <p>
                        Azure Blob storage is an object-to-cloud storage solution. 
                        Used for unstructured data services.<strong>Its main use is in:</strong>
                    </p>
                    <ol> 
                        <li>
                            This type of storage is not structured, which means that there is no restriction 
                            on the types of data in which it can store.
                        </li>
                        <li>
                            File storage for distributed access.
                        </li>
                        <li>
                            Storage of up to 8TB of data for virtual machines.
                        </li>
                    </ol>
                </li>
                <li>
                    <h6><strong>Azure Archive</strong></h6>
                    <p>
                        Many local applications use file shares. Azure files then make migration easier.
                        <strong>Its main use is in:</strong>
                    </p>
                    <ol>
                        <li>You can access these files through many vm's.</li>
                        <li>
                            Tools and utilities used by many developers can be stored and accessed 
                            by others anywhere in the world.
                        </li>
                    </ol>
                </li>
                <li>
                    <h6><strong>Access layer:</strong></h6>
                    <p>
                        Provides different layers of access to your blob storage, 
                        helping you store object data in the most cost-effective way.
                        There are three most common types of layers.
                    </p>
                    <ol>
                        <li>
                            <strong>Hot access layer:</strong> 
                            Optimized pair store data that is accessed frequently. Used to: Images and Text.
                       </li>
                       <li>
                            <strong>Cold access layer:</strong> 
                            Optimized for data accessed less frequently and stored for at least 30 days. Used to: Customer invoice
                       </li>
                       <li>
                            <strong>File access layer:</strong> 
                            Suitable for rarely accessed and stored data for at least 180 days, 
                            with flexible latency requirements. Used to: Backups
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    `
}