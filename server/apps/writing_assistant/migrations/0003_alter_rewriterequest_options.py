# Generated by Django 5.2 on 2025-04-28 03:37

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("writing_assistant", "0002_alter_rewriterequest_options_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="rewriterequest",
            options={"ordering": ["-created_at"]},
        ),
    ]
