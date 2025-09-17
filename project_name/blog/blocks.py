from {{ project_name }}.core.blocks import StandaloneCTABlock
from {{ project_name }}.utils.blocks import StoryBlock


class BlogStoryBlock(StoryBlock):
    standalone_cta = StandaloneCTABlock(group="CTA options")