export const governance = {
    template: `
        <div class="slide paper"> 
            <h2 class="mb-3">Azure - Governance.</h2>
            <p>
                Cloud governance requires good requirements collection and analysis.
                There are several services and resources in Azure that support these efforts:
            </p>
            <ul>
                <li><strong>Azure RBAC (Azure role-based access control)</strong> allows you to create roles that define access permissions.</li>
                <li><strong>Resource locks</strong> prevent resources from being accidentally deleted or changed.</li>
                <li><strong>Resource tags</strong> provide extra information or metadata about the resources.</li>
                <li><strong>Azure Policy</strong> is an Azure service that lets you create, assign, and manage policies that control or audit resources.</li>
                <li><strong>Azure Blueprints</strong> allows you to define a repeatable set of standard Azure governance and resource tools required for your organization.</li>
            </ul>
        </div>
    `
}