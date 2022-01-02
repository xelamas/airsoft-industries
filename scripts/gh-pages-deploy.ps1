[CmdletBinding()]
param (
    [Parameter(Mandatory)]
    [string]
    [Alias("m")]
    $CommitMessage
)
git checkout --orphan gh-pages
npm run build
git --work-tree dist add --all
git --work-tree dist commit -m $CommitMessage
Write-Host "Pushing to gh-pages"
git push origin HEAD:gh-pages

